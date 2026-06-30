import React from 'react'
import Card from './components/Card';
import { Bookmark } from 'lucide-react';

function App() {


const jobOpenings = [
  {
    brandLogo:
      "https://imgs.search.brave.com/HkcziGA_8Og8mD7_lsb1CsmTr6NYOTtAHmcD4VR8ju8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2dvb2dsZS1s/b2dvLWNpcmNsZS1p/Y29uLXAxYXBzemh1/OWQ3bHZ5c2Eud2Vi/cA",
    companyName: "Google",
    dayPosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$42/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/DrXFDKHfTcCp87zurnso6rPHFdDaY3Ynqt_evUAisZY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90b3Bw/bmcuY29tL3VwbG9h/ZHMvcHJldmlldy9t/aWNyb3NvZnQtbG9n/by1wbmctaGQtMTE2/NjA0NzEyMzBiNm5k/NW42aHVoLnBuZw",
    companyName: "Microsoft",
    dayPosted: "1 day ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$48/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/bPVgbeL0d0MC6heiBQIWoca4JO-mLCwf_Pe5hqG6gyw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2l0eXBuZy5jb20v/cHVibGljL3VwbG9h/ZHMvcHJldmlldy93/aGl0ZS1zcXVhcmUt/bW9iaWxlLWFwcC1h/bWF6b24tbG9nby1p/Y29uLTcwMTc1MTY5/NTEzMzM4NGpnemx1/OGthOGsucG5n",
    companyName: "Amazon",
    dayPosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/cf6vDDzPeO68F2o1RG0yNLbxpPTCP4ogRi6Tj4yhGn4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/LW1hcnF1ZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1FbWJs/ZW1lLTY1MHgzNjYu/anBn",
    companyName: "Meta",
    dayPosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$72/hr",
    location: "London, UK",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/qgGgR7QVWuFjAuivw7t9W5iEjXoKnZhzEiB510DSVgM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjEv/NDk2LzI0NS9zbWFs/bC9pb3MtaWNvbi1s/b2dvLXNvZnR3YXJl/LWFwcGxlLXN5bWJv/bC1kZXNpZ24tbW9i/aWxlLWlsbHVzdHJh/dGlvbi1mcmVlLXZl/Y3Rvci5qcGc",
    companyName: "Apple",
    dayPosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$68/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/a9ZDX_VsFJYksou3eGdBwyOmgsEQwnczTeQqNoMA_dw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvTmV0ZmxpeC1T/eW1ib2wtNzAweDM5/NC5wbmc",
    companyName: "Netflix",
    dayPosted: "4 days ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$85/hr",
    location: "Los Angeles, USA",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/J5ofthM6BQky_Y4Sbw6OelkFa2LR26u7V_gbBdHeH2s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDYwLzEw/MC85NzQvbm9uXzJ4/L2Fkb2JlLWxvZ28t/c3F1YXJlLXJvdW5k/ZWQtYWRvYmUtbG9n/by1hZG9iZS1sb2dv/LWZyZWUtZG93bmxv/YWQtZnJlZS1wbmcu/cG5n",
    companyName: "Adobe",
    dayPosted: "2 days ago",
    post: "UI Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$38/hr",
    location: "Noida, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/PXYxak-lsyQEum2ScDue3SFR1uJq-AqJ4TIzxlcqa3g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvSWJt/LUxvZ28tUE5HLnBu/Zw",
    companyName: "IBM",
    dayPosted: "7 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$40/hr",
    location: "Pune, India",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/Fr3usr6Vt1cC3AD8bqYWl-P7D0zMLamI0QD0Cy81D8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvTnZp/ZGlhLUxvZ28tUE5H/LVBpYy5wbmc",
    companyName: "NVIDIA",
    dayPosted: "1 day ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$90/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo:
      "https://imgs.search.brave.com/1nj5cMD9qZ0p_yyNW0ju7lyxeT2BLoXckHLtRlHHucE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uaW5q/YXBuZy5jb20vcHVi/bGljL3N0b3JhZ2Uv/ZnJvbnQtcG5nL3Bu/Zy1jbGlwYXJ0aW50/ZWwtbG9nby1pbnRl/bC1wcm9jZXNzb3Jz/LWJsdWUtdGV4dC1w/bmctaW50ZWwtdGVj/aG5vbG9neS1jb21w/YW55LWJyYW5kaW5n/Mzc4NjYyNy10aHVt/Ym5haWwud2VicA",
    companyName: "Intel",
    dayPosted: "3 days ago",
    post: "Embedded Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$44/hr",
    location: "Bengaluru, India",
  },
];

console.log(jobOpenings)


  return (
    <div className="parent">
    {jobOpenings.map(function(e){
      return <Card company={e.companyName} img={e.brandLogo} day={e.dayPosted} post={e.post}
      tag1={e.tag1} tag2={e.tag2} loc={e.location} pay={e.payPerHour} img={e.brandLogo}/>
    })}
    </div>
  )
}

export default App;