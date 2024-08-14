import { createClient } from '@supabase/supabase-js';

const URL = 'https://iryghdnldqajkdaglzuy.supabase.co';

const API_KEY ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyeWdoZG5sZHFhamtkYWdsenV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NzQ2NjEsImV4cCI6MjAzOTE1MDY2MX0.sRo7FSYKGcFd_kX3oswma4wSijQQqRNqj27PfPwzDhI';

export const supabase = createClient(URL, API_KEY);
