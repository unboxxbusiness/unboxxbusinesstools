'use client';
import { useState } from 'react';
import { IconSearch } from '@tabler/icons-react';
import Hero from '@/components/tools/Hero';
import ToolsGrid from '@/components/ToolsGrid';
import { Input } from '@/components/ui/input';
import { allTools, toolSections } from './toolsData';

function generateId(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
}

export default function ToolsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = toolSections.map(section => {
    const filteredTools = section.tools.filter(tool =>
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...section, tools: filteredTools };
  }).filter(section => section.tools.length > 0);

  return (
    <>
      <Hero toolCount={allTools.length} />
      <main className="container py-12">
        
        <div className="relative max-w-2xl mx-auto mb-16">
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
                type="search"
                placeholder="Search for a tool..."
                className="pl-12 h-14 w-full text-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        {filteredSections.length > 0 ? (
          filteredSections.map(section => (
            <div key={section.title} className="w-full mb-16 scroll-mt-24" id={generateId(section.title)}>
              <h2 className="text-2xl font-bold text-center mb-6">
                {section.title}
              </h2>
              <ToolsGrid tools={section.tools.map(tool => ({...tool, icon: <tool.icon />}))} />
            </div>
          ))
        ) : (
          <div className="text-center py-16">
            <p className="text-lg font-semibold">No tools found for "{searchTerm}"</p>
            <p className="text-muted-foreground mt-2">Try a different search term.</p>
          </div>
        )}
      </main>
    </>
  );
}
