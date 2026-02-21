-- Run this in Supabase Dashboard → SQL Editor to fix 401 on waitlist signups.
-- This allows anonymous users (your landing page) to INSERT into the waitlist table.

-- Enable RLS on the table (if not already)
ALTER TABLE "Blocrate-MVP-Waitlist" ENABLE ROW LEVEL SECURITY;

-- Allow anon role to insert one row (email only)
CREATE POLICY "Allow anon to insert waitlist"
  ON "Blocrate-MVP-Waitlist"
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Optional: allow anon to read nothing (no SELECT). Omit this if you want no read.
-- By default, with RLS enabled and no SELECT policy, anon cannot read rows.
