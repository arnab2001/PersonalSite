-- =====================================================
-- OptiSchema Portfolio - Supabase Database Schema
-- =====================================================
-- Run this in Supabase SQL Editor to create all tables
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- PROJECTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  gallery_images TEXT[] DEFAULT '{}',
  tech_stack TEXT[] NOT NULL,
  github_url TEXT,
  demo_url TEXT,
  website_url TEXT,
  platform TEXT,
  achievements TEXT[] DEFAULT '{}',
  features TEXT[] DEFAULT '{}',
  display_order INT DEFAULT 999,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  is_featured BOOLEAN DEFAULT FALSE
);

-- Create indexes for projects
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured) WHERE is_featured = TRUE;

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on projects table
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Public read access for projects
-- Note: Run this only once, or use DROP POLICY first if recreating
CREATE POLICY "Public can read projects" ON projects
  FOR SELECT USING (true);
