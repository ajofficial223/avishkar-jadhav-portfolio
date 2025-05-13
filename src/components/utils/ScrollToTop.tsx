import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls to the top of the page when navigating to a new route
 * Handles both regular navigation and hash navigation with error handling
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const scrollAttempted = useRef(false);
  const initialRender = useRef(true);

  // Handle page load with hash - prevents double scrolling from initial load
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      
      // If there's a hash on initial page load, allow the browser to handle it
      if (hash && document.querySelector(hash)) {
        // Skip this render cycle
        return;
      }
    }
    
    // Reset the scroll attempt tracker on pathname change
    scrollAttempted.current = false;
  }, [pathname, hash]);

  useEffect(() => {
    // For normal page changes (without hash), scroll to top immediately
    if (!hash && !scrollAttempted.current) {
      window.scrollTo(0, 0);
      return;
    }
    
    // Skip if already attempted scroll or if hash is handled by direct click
    if (scrollAttempted.current || !hash) return;
    
    try {
      // Mark that we've attempted scrolling
      scrollAttempted.current = true;
      
      // Handle hash navigation from URL changes
      const timeoutId = setTimeout(() => {
        try {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            // If hash element not found, scroll to top
            console.warn(`Element with selector "${hash}" not found. Scrolling to top.`);
            window.scrollTo(0, 0);
          }
        } catch (error) {
          console.error('Error scrolling to hash element:', error);
          window.scrollTo(0, 0);
        }
      }, 100);
      
      return () => clearTimeout(timeoutId);
    } catch (error) {
      console.error('Error in ScrollToTop component:', error);
      // Fallback to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null; // This component doesn't render anything
};

export default ScrollToTop; 