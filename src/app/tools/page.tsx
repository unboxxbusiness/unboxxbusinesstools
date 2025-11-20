'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function ToolsPage() {
  return (
    <div className="bg-gray-50/90">
      <div className="py-24 lg:py-32">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              50+ Free Tools Built for Coaching Institutes
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A complete suite of free, easy-to-use tools to help you manage and grow your coaching business, from lead management to student engagement.
            </p>
          </div>
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search for a tool..."
                className="w-full pl-10 pr-4 py-6 rounded-full border-gray-300 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
