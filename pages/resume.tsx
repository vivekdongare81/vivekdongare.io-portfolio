import React from "react";
import Page from "@/components/utility/Page";
import SectionTitle from "@/components/global/SectionTitle";

function Resume() {
  return (
    <Page currentPage="Resume" meta={{ title: "Resume", desc: "Vivek Dongare's Resume" }}>
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title="Resume" />
        
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/static/resume/VivekDongare_ResumeV4.pdf"
              className="w-full h-screen"
              title="Vivek Dongare Resume"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Resume; 