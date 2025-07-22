"use client"

import { Linkedin, Github, Send, Palette } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('loading');
        setError('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                setError(data.error || 'Something went wrong.');
            }
        } catch (err: unknown) {
            setStatus('error');
            setError('error');
        }
    }

    return (
        <section id="contact" className="bg-white px-5 flex flex-col items-start justify-center md:py-20 pb-10 md:px-10">
            <div className="text-center mb-7">
                <div className="relative inline-flex border border-[#01B4F2] my-5">
                    <p className="font-semibold text-3xl text-black mx-4 my-1">Contact me</p>
                    <div className="absolute -top-0.5 -left-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                    <div className="absolute -top-0.5 -right-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                    <div className="absolute -bottom-0.5 -left-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                    <div className="absolute -bottom-0.5 -right-0.5 bg-[#01B4F2] h-1.5 w-1.5"></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-13 items-start w-full">
                <div className="w-full md:w-1/2">
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 bg-black/3 border border-black/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#01B4F2]/50 text-black"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 bg-black/3 border border-black/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#01B4F2]/50 text-black"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-3 bg-black/3 border border-black/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#01B4F2]/50 text-black"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <div className="text-center mt-1">
                            <button
                                type="submit"
                                className="w-full p-3 bg-[#01B4F2] text-white font-bold rounded-lg hover:bg-opacity-90 transition-colors"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="text-green-600 mt-2">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-600 mt-2">{error}</p>}
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-1/2 text-black">
                    <h3 className="text-2xl font-semibold mb-2">Or, Reach Out Directly</h3>
                    <p className="text-gray-600 mb-3">
                        You can also contact me through my social media channels. I&apos;m active on these platforms and would be happy to connect!
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <Linkedin className="w-4 h-4 mr-3 mt-1 text-[#01B4F2]" />
                            <div>
                                <h4 className="font-semibold text-gray-800 -mb-2">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/yassine-sissinou-4106a5292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-sm text-gray-600 hover:text-[#01B4F2] transition-colors">linkedin.com/in/yassine-sissinou</a>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Github className="w-4 h-4 mr-3 mt-1 text-[#01B4F2]" />
                            <div>
                                <h4 className="font-semibold text-gray-800 -mb-2">Github</h4>
                                <a href="https://github.com/sissinou-moon" className="text-sm text-gray-600 hover:text-[#01B4F2] transition-colors">github.com/sissinou-moon</a>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Send className="w-4 h-4 mr-3 mt-1 text-[#01B4F2]" />
                            <div>
                                <h4 className="font-semibold text-gray-800 -mb-2">Telegram</h4>
                                <a href="https://t.me/sissinou" className="text-sm text-gray-600 hover:text-[#01B4F2] transition-colors">0656068431</a>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Palette className="w-4 h-4 mr-3 mt-1 text-[#01B4F2]" />
                            <div>
                                <h4 className="font-semibold text-gray-800 -mb-2">Behance</h4>
                                <a href="https://www.behance.net/yassinesissinou/projects" className="text-sm text-gray-600 hover:text-[#01B4F2] transition-colors">behance.net/yassinesissinou</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}