// Process.tsx
"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
}

export default function Process() {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Uncover Hidden Opportunities",
      description: "Manual workarounds, disconnected systems, and data blind spots create hidden friction in every business. We begin by untangling the way your systems, people, and information flow together. This clarity lays the foundation for focused, high-impact solutions.",
      icon: "👁️",
      features: [
        "Process Mapping",
        "Systems & Tools Review",
        "Opportunity Identification",
        "Prioritized Next Steps"
      ]
    },
    {
      number: "02",
      title: "Integrate",
      subtitle: "Tailored AI-driven Workflows",
      description: "Our proven agentic frameworks are customized to your industry and needs. We integrate our specialized AI agents seamlessly into your existing workflows, ensuring compliance, security, and smooth operation from day one.",
      icon: "🔧",
      features: [
        "Custom Agent Configuration",
        "Seamless Tool Integration",
        "Security & Compliance Setup",
        "Workflow Optimization"
      ]
    },
    {
      number: "03",
      title: "Activate",
      subtitle: "Launch Your AI Workforce",
      description: "Your AI agents go live with full monitoring and support. We ensure your team is confident using their new AI workforce while providing the training and resources needed for immediate impact and long-term success.",
      icon: "🚀",
      features: [
        "Agent Deployment",
        "Team Training & Onboarding",
        "Performance Monitoring",
        "Initial Optimization"
      ]
    },
    {
      number: "04",
      title: "Scale",
      subtitle: "Expand Your AI-Driven Success",
      description: "As your business grows and evolves, so do your AI capabilities. We provide ongoing support, strategy, and expansion opportunities to help you stay competitive and maximize your return on investment.",
      icon: "📈",
      features: [
        "Performance Analytics",
        "Continuous Improvement",
        "New Agent Deployment",
        "Strategic Growth Planning"
      ]
    }
  ];

  return (
    <section id="process" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From discovery to deployment, we follow a systematic approach to integrate our 
            industry-proven AI agents into your business operations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="text-6xl">{step.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-green-500 tracking-wide uppercase">
                      Step {step.number}
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-slate-700 mb-4">
                  {step.subtitle}
                </h4>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {step.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  {/* Main Circle */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-80 h-80 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center relative"
                  >
                    {/* Step Number */}
                    <div className="text-8xl font-bold text-slate-300">
                      {step.number}
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0] 
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      className="absolute -top-4 -right-4 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl"
                    >
                      {step.icon}
                    </motion.div>
                    
                    {/* Progress Ring */}
                    <svg 
                      className="absolute inset-0 w-full h-full -rotate-90" 
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="2"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 283" }}
                        whileInView={{ strokeDasharray: `${(index + 1) * 70.75} 283` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 pt-16 border-t border-slate-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven process can integrate AI agents into your workflow 
            and deliver measurable results in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
              Start Your Discovery Call
            </button>
            <button className="border-2 border-slate-300 text-slate-700 hover:border-green-500 hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}