import React from 'react';
import { Award, CheckCircle2, Star, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: 'Gemini Certified Student (K12)',
      org: 'Google',
      date: 'Apr 2026',
      id: '457325398',
      skills: ['AI Prompting', 'Prompt Engineering'],
      highlight: null
    },
    {
      title: 'Vidamuyarchi Startup Bootcamp',
      org: 'Sri Shakthi Institute of Engineering and Technology',
      date: 'Mar 2026',
      id: null,
      skills: ['Lean Startup', 'Business Development'],
      highlight: 'Shortlisted: Top 7 out of 25 Startup Ideas'
    },
    {
      title: 'Vision Language Models (VLM) Bootcamp',
      org: 'OpenCV University',
      date: 'Jan 2026',
      id: 'af97e072b819436e9ca8662d01d7e9d1',
      skills: ['CLIP', 'Qwen2.5-VL', 'Zero-Shot Learning', 'Computer Vision'],
      highlight: 'Certificate of Excellence (Grade: 96%)'
    },
    {
      title: 'Python Developer',
      org: 'Sololearn',
      date: 'Oct 2025',
      id: null,
      skills: ['Python Programming'],
      highlight: null
    },
    {
      title: 'Young Professional',
      org: 'TCS iON',
      date: 'Jul 2025',
      id: '240640-28642455-1016',
      skills: ['Communication', 'Accounting', 'Business Ethics'],
      highlight: 'Career Edge Specialization'
    },
    {
      title: 'Prompt Engineering',
      org: 'Great Learning',
      date: 'Jul 2025',
      id: null,
      skills: ['Prompt Engineering', 'Generative AI'],
      highlight: null
    }
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] py-20 bg-white text-slate-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary-blue uppercase mb-4 text-center mx-auto">Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Professional Certifications</h3>
        </div>
        
        <div className="grid gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-primary-blue/30 transition-all shadow-sm hover:shadow-xl relative overflow-hidden">
              {cert.highlight && (
                <div className="absolute top-0 right-0 bg-primary-blue text-white text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl tracking-widest flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" /> {cert.highlight}
                </div>
              )}
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary-blue flex items-center justify-center text-primary-blue group-hover:scale-110 transition-transform shadow-inner">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                     <h4 className="text-xl font-bold text-slate-900 leading-tight">{cert.title}</h4>
                     <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-60" />
                  </div>
                  <p className="text-primary-blue font-bold text-sm uppercase tracking-wide">{cert.org}</p>
                  <p className="text-slate-400 text-xs mt-2 font-mono italic">{cert.id ? `ID: ${cert.id}` : 'Verified Credential'}</p>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-3 border-t md:border-t-0 border-slate-100 pt-6 md:pt-0">
                <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-tighter shadow-md">{cert.date}</span>
                <div className="flex flex-wrap md:justify-end gap-2">
                  {cert.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white border border-slate-100 text-slate-500 text-[10px] font-bold uppercase rounded-md shadow-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
