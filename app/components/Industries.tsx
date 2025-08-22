// Industries.tsx
"use client";

import { motion } from "framer-motion";

interface Industry {
  name: string;
  icon: string;
  description: string;
  keyBenefits: string[];
  recommendedAgents: {
    name: string;
    role: string;
    impact: string;
  }[];
  gradient: string;
}

export default function Industries() {
  const industries: Industry[] = [
    {
      name: "Healthcare & Medical",
      icon: "🏥",
      description: "Transform patient care with AI-powered automation that reduces administrative burden and improves operational efficiency while maintaining strict compliance standards.",
      keyBenefits: [
        "HIPAA-compliant automation",
        "Reduced administrative overhead",
        "Improved patient experience",
        "Streamlined billing processes"
      ],
      recommendedAgents: [
        {
          name: "Harper",
          role: "HR Onboarding Agent",
          impact: "Streamline medical staff onboarding from 14 days to 3 days"
        },
        {
          name: "Iris",
          role: "Document Processing Agent",
          impact: "Process insurance claims 50x faster with 99.5% accuracy"
        }
      ],
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      name: "Financial Services",
      icon: "💼",
      description: "Enhance client relationships and operational efficiency with AI agents that handle compliance, automate workflows, and provide superior customer service.",
      keyBenefits: [
        "Regulatory compliance automation",
        "Enhanced client onboarding",
        "Real-time fraud detection",
        "Automated reporting & analytics"
      ],
      recommendedAgents: [
        {
          name: "Michael",
          role: "AP Automation Agent",
          impact: "Save $250,000+ annually on financial processing"
        },
        {
          name: "Blake",
          role: "Lead Qualification Agent",
          impact: "Increase lead conversion rates by 35%"
        }
      ],
      gradient: "from-green-100 to-emerald-100"
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      description: "Optimize supply chain operations, inventory management, and quality control with intelligent AI agents that reduce costs and improve efficiency.",
      keyBenefits: [
        "Supply chain optimization",
        "Predictive maintenance",
        "Quality control automation",
        "Inventory cost reduction"
      ],
      recommendedAgents: [
        {
          name: "Mason",
          role: "Inventory Management Agent",
          impact: "Reduce inventory costs by 25% and improve availability by 30%"
        },
        {
          name: "Iris",
          role: "Document Processing Agent",
          impact: "Automate compliance documentation with 99.5% accuracy"
        }
      ],
      gradient: "from-orange-100 to-red-100"
    },
    {
      name: "Professional Services",
      icon: "⚖️",
      description: "Scale your service delivery with AI agents that handle client communications, project management, and administrative tasks, allowing you to focus on high-value work.",
      keyBenefits: [
        "Client communication automation",
        "Project workflow optimization",
        "Document generation & review",
        "Time tracking & billing automation"
      ],
      recommendedAgents: [
        {
          name: "Luna",
          role: "Customer Success Representative",
          impact: "Achieve 95% client satisfaction while saving $15,000-50,000 annually"
        },
        {
          name: "Harper",
          role: "HR Onboarding Agent",
          impact: "Reduce new employee onboarding time by 78%"
        }
      ],
      gradient: "from-purple-100 to-pink-100"
    },
    {
      name: "Technology & SaaS",
      icon: "💻",
      description: "Accelerate growth and improve customer experience with AI agents that handle support, sales qualification, and user onboarding at scale.",
      keyBenefits: [
        "24/7 customer support automation",
        "Lead scoring & qualification",
        "User onboarding optimization",
        "Product feedback analysis"
      ],
      recommendedAgents: [
        {
          name: "Blake",
          role: "Lead Qualification Agent",
          impact: "Boost sales team efficiency by 10-20% and save $47,000 monthly"
        },
        {
          name: "Echo",
          role: "Employee Recognition Agent",
          impact: "Increase team engagement by 25% and reduce turnover by 20%"
        }
      ],
      gradient: "from-indigo-100 to-blue-100"
    },
    {
      name: "Retail & E-commerce",
      icon: "🛍️",
      description: "Enhance customer experience and optimize operations with AI agents that manage inventory, customer service, and personalized marketing campaigns.",
      keyBenefits: [
        "Personalized customer experiences",
        "Inventory optimization",
        "Automated customer service",
        "Dynamic pricing strategies"
      ],
      recommendedAgents: [
        {
          name: "Luna",
          role: "Customer Success Representative",
          impact: "Provide 24/7 customer support with 95% satisfaction rates"
        },
        {
          name: "Mason",
          role: "Inventory Management Agent",
          impact: "Reduce stock-outs and overstock by 25%"
        }
      ],
      gradient: "from-pink-100 to-rose-100"
    }
  ];

  return (
    <section id="industries" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industries We Transform
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our specialized AI agents are proven across diverse industries, delivering 
            measurable results and competitive advantages tailored to your sector's unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${industry.gradient} rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300`}
            >
              {/* Industry Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{industry.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {industry.name}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-lg leading-relaxed mb-6">
                {industry.description}
              </p>

              {/* Key Benefits */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Key Benefits:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.keyBenefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (benefitIndex * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recommended Agents */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Recommended Agents:
                </h4>
                <div className="space-y-4">
                  {industry.recommendedAgents.map((agent, agentIndex) => (
                    <motion.div
                      key={agentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (agentIndex * 0.15) }}
                      className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-white/50"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h5 className="font-bold text-slate-900">
                            {agent.name}
                          </h5>
                          <p className="text-sm text-green-600 font-medium mb-2">
                            {agent.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm">
                        {agent.impact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Industry?
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We specialize in creating <span className="text-green-400 font-semibold">custom AI agent solutions</span> tailored 
              to your industry's unique challenges and requirements. Our team has experience across 
              dozens of sectors and can rapidly deploy industry-specific agents that deliver immediate value.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold mb-2">Custom Agent Development</h4>
                <p className="text-slate-400 text-sm">Tailored AI agents built for your specific industry workflows</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold mb-2">Rapid Deployment</h4>
                <p className="text-slate-400 text-sm">Industry-specific solutions deployed in weeks, not months</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="text-3xl mb-3">🔧</div>
                <h4 className="font-semibold mb-2">Full Integration</h4>
                <p className="text-slate-400 text-sm">Seamless integration with your existing tools and processes</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
                Discuss Your Industry
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
                View Custom Solutions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}