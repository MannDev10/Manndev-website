import Markdown from 'react-markdown'
import { PolicyData } from '../../utilities/privacy';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-[#121212] text-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-[#1b1b1b] border border-[#333438] rounded-3xl p-6 sm:p-10 shadow-2xl">
                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                        BeaverPDF Privacy Policy
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Last updated: October 25, 2026
                    </p>
                </div>
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-neutral-700" />
                </div>
                <div className="space-y-6 text-sm sm:text-base leading-relaxed">
                    <Markdown
                        components={{
                            ul: ({ node, ...props }) => (
                                <ul className="list-disc list-inside my-3 space-y-1 text-neutral-300" {...props} />
                            ),
                            ol: ({ node, ...props }) => (
                                <ol className="list-decimal list-inside my-3 space-y-1 text-neutral-300" {...props} />
                            ),
                            li: ({ node, ...props }) => (
                                <li className="ml-2" {...props} />
                            ),
                            p: ({ node, ...props }) => (
                                <p className="my-2 leading-relaxed" {...props} />
                            )
                        }}
                    >{PolicyData}</Markdown>
                </div>
                <div className="mt-10 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-500">
                    &copy; {new Date().getFullYear()} MannByte. All rights reserved.
                </div>

            </div>
        </div>
    );
}

export default PrivacyPolicy;