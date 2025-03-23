import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from '@/constants';
import InterviewCard from "@/components/InterviewCard";

const page = () => {
  return (
    <div>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Sales-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice sales calls & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an call</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          
            {dummyInterviews.map((interview) => (
              <InterviewCard { ... interview } key={interview.id}/>
            ))} 
          
        </div> 
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">
          
            <p>There are no interviews available</p>
          
        </div>
      </section>
    </div>
  )
}

export default page
