import React , {useState , useEffect} from 'react';
import axios from "axios";
import Link from 'next/link'

function Role() {
  const [jobs, setJobs] = useState([]);
 
  async function fetchData() {
    try {
      const response = await axios.get("https://projects.softgetix.com/SoftGetixAPI/public/api/jobProfile")
      setJobs(response.data[0])
      localStorage.setItem('roles',JSON.stringify(response.data[0]))
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);

  
  return (
    <div>
      <section id="opportunities">
        <div className="container">
        <div className="row">
            <div className="text-center pb-2 m-auto">
              <div className="col-md-12">
                <h2 className="font-weight-bold text-center staff-heading">Current <b className="orange-text">opportunities</b></h2>
              </div>
              <div className="col-md-12 m-auto">
                <div className="staff_steps_details text-center">
                  <p>What are you waiting for? Start your future at SoftGetix today</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4 career-opportunities">
          {
            jobs.map((job, index)=>{
              return (
              <>
                <div className="col-md-4">
                  <Link style={{ "--background-color": `${job.border_color}` }} href={`/jobdetails/${job.id}`} className="link-hover" >
                    <div className="opportunities1" style={{ borderColor : `${job.border_color}`}} >
                          <div className="opportunities1_body  link-hover">
                            <h3 className="text-center">ROLE</h3>
                            <h2 className="text-center pt-3 pb-3 h2-font" >{job.job_name}</h2>
                            <h5 className="text-center">Desired Experience {job.experience}</h5>
                        </div>
                      </div>
                  </Link>
                </div>
              </>
              )
            })
          }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Role
