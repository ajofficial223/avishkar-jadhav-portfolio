import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically injected by Lovable when connected to Supabase
const supabaseUrl = "https://ebkeinssyeeeirzrqjzd.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVia2VpbnNzeWVlZWlyenJxanpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzY3MTMsImV4cCI6MjA2MDQ1MjcxM30.__-pb8y-3MdqqXkYy9ymYIA2eNpkUfhTeZVhBiziAXI";

// Create the Supabase client if credentials are available
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Function to safely get the Supabase client
export const getSupabase = () => {
  if (!supabase) {
    console.warn('Supabase client is not initialized. Check your environment variables.');
    return null;
  }
  return supabase;
};

// Check if Supabase is initialized on load
const isInitialized = supabase !== null;
console.log('Supabase client initialized:', isInitialized ? 'Yes' : 'No');

// Export a helper to check connection status
export const isSupabaseConnected = () => {
  return isInitialized;
};
