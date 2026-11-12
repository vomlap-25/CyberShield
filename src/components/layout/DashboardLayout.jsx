import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Mail, 
  Globe, 
  PhoneOff, 
  FileCode, 
  History, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  Shield,
  Zap,
  HelpCircle
} from 'lucide-react';
import { Breadcrumbs } from '../common/Breadcrumbs';

export const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Overview Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Scan Centre (All)', path: '/scan', icon: Zap },
    { label: 'Phishing Message Scan', path: '/scan?tab=phishing', icon: Mail },
    { label: 'Malicious URL Scan', path: '/scan?tab=url', icon: Globe },
    { label: 'Digital Arrest Scan', path: '/scan?tab=digital-arrest', icon: PhoneOff },
    { label: 'Android APK Safety', path: '/scan?tab=application', icon: FileCode },
    { label: 'Awareness Hub', path: '/awareness', icon: BookOpen },
    { label: 'About & Disclaimer', path: '/about', icon: HelpCircle },
  ];

  const isLinkActive = (itemPath) => {
    if (itemPath === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    if (itemPath === '/scan') {
      return location.pathname === '/scan' && !location.search;
    }
    if (itemPath.includes('?tab=')) {
      const tab = itemPath.split('?tab=')[1];
      return location.pathname === '/scan' && location.search.includes(`tab=${tab}`);
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-slate-50 min-h-[calc(100vh-5rem)]">
      
      {/* Mobile Top Subbar with Sidebar Toggle */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors"
        >
          <Menu className="w-4 h-4 text-cyan-600" />
          <span>Security Sidebar</span>
        </button>
        <span className="text-xs text-slate-500 font-mono">CyberShield Engine</span>
      </div>

      {/* Sidebar - Desktop & Mobile Slideover */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 md:static md:z-auto bg-navy-950 md:bg-navy-900 text-slate-300 border-r border-navy-800 transition-all duration-300 flex flex-col
          ${mobileOpen ? 'translate-x-0 w-72' : '-translate-x-full md:translate-x-0'}
          ${collapsed ? 'md:w-20' : 'md:w-64'}
        `}
      >
        {/* Mobile Header Inside Drawer */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-navy-800">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white">CyberShield Menu</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg"
          >
            &times;
          </button>
        </div>

        {/* Sidebar Nav Items */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          <div className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 ${collapsed ? 'hidden' : 'block'}`}>
            Security Operations
          </div>

          {navItems.map((item) => {
            const active = isLinkActive(item.path);
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? item.label : undefined}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all group
                  ${
                    active
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-navy-800/80'
                  }
                `}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-colors ${active ? 'text-cyan-400' : 'text-slate-400 group-hover:text-cyan-400'}`} />
                <span className={`truncate ${collapsed ? 'md:hidden' : 'block'}`}>
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>

        {/* Emergency Helpline Widget at bottom of sidebar */}
        {!collapsed && (
          <div className="p-3 m-3 rounded-xl bg-navy-950/70 border border-navy-800 text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
              <Shield className="w-3.5 h-3.5" />
              <span>Emergency 1930</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-snug">
              Call national helpline 1930 immediately if money has been extorted.
            </p>
          </div>
        )}

        {/* Desktop Collapse Toggle */}
        <div className="hidden md:flex items-center justify-end p-3 border-t border-navy-800">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-navy-950/70 backdrop-blur-sm z-20 md:hidden"
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
