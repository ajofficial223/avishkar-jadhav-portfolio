
import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically injected by Lovable when connected to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create the Supabase client only if the URL and key are available
export const supabase = supabaseUrl && supabaseAnonKey 
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

console.log('Supabase client initialized:', supabase ? 'Yes' : 'No');
