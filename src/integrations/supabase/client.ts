
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ebkeinssyeeeirzrqjzd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVia2VpbnNzeWVlZWlyenJxanpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzY3MTMsImV4cCI6MjA2MDQ1MjcxM30.__-pb8y-3MdqqXkYy9ymYIA2eNpkUfhTeZVhBiziAXI";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
