// AgentCarousel.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Agent {
  name: string;
  role: string;
  tagline: string;
  icon: string;
  benefits: string[];
  roi: string;
}

export function AgentCarousel() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const agents: Agent[] = [
    {
      name: "Luna",
      role: "Customer Success Representative",
      tagline: "Your 24/7 Customer Care Champion",
      icon: "🌙",
      benefits: ["95% customer satisfaction", "Savings: $15,000-50,000 annually", "ROI Timeline: 3-6 months"],
      roi: "Saves $15,000-50,000 annually",
    },
    {
      name: "Michael",
      role: "AP Automation Agent",
      tagline: "Your Financial Flow Optimizer",
      icon: "💰",
      benefits: ["Savings: $250,000 annually (per case study)", "80% cost reduction proven", "ROI Timeline: 6-12 months"],
      roi: "Save $250,000+ annually",
    },
    {
      name: "Harper",
      role: "HR Onboarding Agent",
      tagline: "Your People-First Productivity Partner",
      benefits: ["Reduces onboarding from 14 days to 3 days", "$18,000+ annual cost savings", "82% improvement in new hire retention", "30% faster time-to-productivity"],
      icon: "👥",
      roi: "Save $18,000+ annually",
    },
    {
      name: "Blake",
      role: "Lead Qualification Agent",
      tagline: "Your Sales Pipeline Precision Engine",
      benefits: ["10-20% increase in sales team efficiency", "2+ hours daily time savings", "35% higher lead conversion rates", "$47,000 monthly saved"],
      icon: "🎯",
      roi: "Boost conversions by 35%",
    },
    {
      name: "Iris",
      role: "Document Processing Agent",
      tagline: "Your Instant Document Decoder",
      benefits: ["50x faster than manual processing", "99.5% accuracy", "$20 saved per document", "75% reduction in manual work"],
      icon: "📄",
      roi: "Save $20 per document",
    },
    {
      name: "Mason",
      role: "Inventory Management Agent",
      tagline: "Your Stock Level Genius",
      benefits: ["25% inventory cost savings", "30% stock availability improvement", "20% less obsolete inventory"],
      icon: "📦",
      roi: "Reduce inventory costs by to 25%",
    },
    {
      name: "Echo",
      role: "Employee Recognition Agent",
      tagline: "Your Culture Champion",
      benefits: ["$3,000-5,000 savings per retained employee", "25% engagement increase", "20% turnover reduction", "17% productivity boost"],
      icon: "🏆",
      roi: "Save $3,000-5,000 per employee",
    },
  ];

  const handleAgentClick = (agent: Agent) => {
    if (selectedAgent?.name === agent.name) {
      setSelectedAgent(null);
    } else {
      setSelectedAgent(agent);
    }
  };

  return (
    <section id="services" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Agents</h2>
        
        {/* Agent Carosel */}
        <div className="overflow-x-auto overflow-y-visible pt-4 pb-4 mb-8">
          <div className="flex gap-6 snap-x snap-mandatory px-2">
            {agents.map((agent, idx) => (
              <div
                key={agent.name}
                className={`min-w-[280px] max-w-[280px] bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 snap-start border flex-shrink-0 transition duration-300 cursor-pointer transform hover:scale-105 relative ${
                  selectedAgent?.name === agent.name 
                    ? 'border-green-400 shadow-lg shadow-green-400/20' 
                    : 'border-slate-600'
                }`}
                onClick={() => handleAgentClick(agent)}
              >
                <div className="text-4xl mb-4">{agent.icon}</div>
                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{agent.role}</p>
                <p className="text-amber-100 text-sm italic mb-3">"{agent.tagline}"</p>
                <p className="text-green-400 font-semibold text-sm">{agent.roi}</p>
                
                {/* Dropdown Arroww*/}
                <div className="absolute top-2 right-2">
                  <motion.div
                    animate={{ rotate: selectedAgent?.name === agent.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 text-sm"
                  >
                    ▼
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Details*/}
        <AnimatePresence>
          {selectedAgent && (
            <motion.div
              key={selectedAgent.name}
              initial={{ 
                opacity: 0, 
                y: -20,
                scale: 0.95
              }}
              animate={{ 
                opacity: 1, 
                y: 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                y: -20,
                scale: 0.95
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
              className="bg-slate-800/95 backdrop-blur-md border border-green-400/30 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl shadow-green-400/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-green-400">{selectedAgent.name} will:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3 mb-6">
                    {selectedAgent.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-green-400 mt-0.5 flex-shrink-0">→</span>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4 mb-4">
                    <p className="text-green-400 font-semibold text-lg">{selectedAgent.roi}</p>
                  </div>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                    Deploy {selectedAgent.name} Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AgentCarousel;
