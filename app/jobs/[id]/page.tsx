import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export default async function JobDetail({ params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({ where: { id: params.id } });

  if (!job) {
    return <div className='container py-20'>Job not found.</div>;
  }

  return (
    <main className='min-h-screen bg-[#F7FAFC] py-10'>
      <div className='container'>
        <div className='rounded-3xl border border-[var(--line)] bg-gradient-to-b from-[#F7FAFC] to-[#EFF6F8] p-4 md:p-6'>
          <div className='rounded-2xl border border-zinc-100 bg-white shadow-[0_12px_36px_rgba(15,23,42,0.06)] p-6 md:p-10 grid lg:grid-cols-[1fr_320px] gap-8'>
            <section className='space-y-6'>
              <div className="space-y-4">
                <h1 className='text-4xl font-semibold'>{job.title}</h1>
                <p className='text-zinc-600'>
                  {job.category} • {job.location} • {job.salary}
                </p>
                <div className='text-zinc-700 whitespace-pre-wrap text-lg leading-relaxed'>
                  {job.description}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 pt-4 border-t border-zinc-100">
                <div>
                  <h2 className='font-semibold text-zinc-900 mb-3'>What you’ll do</h2>
                  <ul className='list-disc pl-6 text-zinc-600 space-y-2'>
                    <li>Build elegant, performant features.</li>
                    <li>Partner with product and design teams.</li>
                    <li>Help shape our hiring and onboarding process.</li>
                  </ul>
                </div>
                <div>
                  <h2 className='font-semibold text-zinc-900 mb-3'>What we’re looking for</h2>
                  <ul className='list-disc pl-6 text-zinc-600 space-y-2'>
                    <li>Curious, eager learners with strong collaboration skills.</li>
                    {job.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <h2 className='font-semibold text-zinc-900 mb-3'>Custom Questions</h2>
                <ul className='list-disc pl-6 text-zinc-600 space-y-2'>
                  {job.customQuestions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
            </section>

            <aside className='lg:sticky lg:top-20 space-y-4 h-fit'>
              <div className='rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#008080]'>Ready to apply?</p>
                <p className='mt-3 text-zinc-600 leading-relaxed text-sm'>
                  Submit your information and resume for fast review.
                </p>
              </div>
              <div className='rounded-3xl border border-zinc-100 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'>
                <Link href={`/apply/${job.id}`} className='btn-primary block w-full text-center py-3 rounded-2xl'>
                  Apply Now
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
