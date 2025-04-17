
import { createClient } from '@supabase/supabase-js';

// These environment variables are automatically injected by Lovable when connected to Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the required environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables are missing. Make sure you have connected to Supabase in the Lovable interface.');
}

// Create the Supabase client only if the URL and key are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to safely use the Supabase client
export const getSupabase = () => {
  if (!supabase) {
    throw new Error('Supabase client is not initialized. Make sure you have connected to Supabase in the Lovable interface.');
  }
  return supabase;
};
