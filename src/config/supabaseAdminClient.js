import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAdminKey = import.meta.env.VITE_SERVICE_KEY
const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey, {auth: {autoRefreshToken: false, persistSession: false}})

export default supabaseAdmin