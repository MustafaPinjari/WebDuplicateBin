import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/utils/cn'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "What is Duplicate Bin?",
    answer: "Duplicate Bin is a safe duplicate file management tool that helps you find and clean duplicate files by archiving them first instead of deleting immediately."
  },
  {
    question: "How is Duplicate Bin different from traditional duplicate cleaners?",
    answer: "Unlike traditional tools, Duplicate Bin follows an archive-first approach, preserving files and directory structure so you can review and restore before permanent deletion."
  },
  {
    question: "Is it safe to use Duplicate Bin on system folders?",
    answer: "Duplicate Bin automatically excludes critical operating system directories to prevent accidental damage and always validates permissions before performing actions."
  },
  {
    question: "How does Duplicate Bin detect duplicates?",
    answer: "It uses multiple hashing algorithms along with metadata and content-aware analysis to accurately detect true and near-duplicate files."
  },
  {
    question: "Can I undo or restore files after cleanup?",
    answer: "Yes. All actions support rollback, and archived files can be restored at any time until you choose to permanently delete them."
  },
  {
    question: "Does Duplicate Bin support automation or CLI usage?",
    answer: "Yes. Duplicate Bin includes a command-line interface and API support for automation, scripting, and enterprise workflows."
  }
]

interface AccordionItemProps {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}

const AccordionItem = ({ item, isOpen, onToggle }: AccordionItemProps) => {
  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-900/30 transition-colors duration-200 focus:outline-none focus:bg-gray-900/30 focus:ring-2 focus:ring-purple-500/20 rounded-lg px-2"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white pr-8 leading-relaxed">
          {item.question}
        </span>
        
        <div className="flex-shrink-0 ml-4">
          <div className={cn(
            "h-6 w-6 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-200",
            isOpen ? "bg-purple-600 border-purple-600 rotate-180" : "hover:border-gray-500"
          )}>
            {isOpen ? (
              <Minus className="h-3 w-3 text-white" />
            ) : (
              <Plus className="h-3 w-3 text-gray-400" />
            )}
          </div>
        </div>
      </button>
      
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="pb-6 px-2">
          <p className="text-gray-300 leading-relaxed text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="relative py-32 bg-black">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Common questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-gray-950/50 border border-gray-800 rounded-2xl p-8 lg:p-12">
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  isOpen={openItems.has(index)}
                  onToggle={() => toggleItem(index)}
                />
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-xl text-white font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/20">
              Browse all FAQs
            </button>
          </div>
        </div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-green-500/5 rounded-full blur-3xl opacity-60" />
    </section>
  )
}