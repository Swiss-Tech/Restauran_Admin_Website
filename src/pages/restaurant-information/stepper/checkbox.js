import React, { useState , useEffect} from "react";

  
export function WorkingDays (){
  const [workingDays, setWorkingDays] = useState({
    days :[]
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { days } = workingDays;
    // Case 1 : The user checks the box
    if (checked) {
      setWorkingDays({
        days: [...days, value],
      
      });
    }
    // Case 2  : The user unchecks the box
    else {
      setWorkingDays({
        days: days.filter((e) => e !== value),
      });
    }
   
  };

  
  
 return(
  <div>
  <div>{workingDays.days.length}</div>
 <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value="Javascript"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Javascript
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value="html"
                        id="html"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="html"
                      >
                          html
                      </label>
                    </div>
  </div>
  
 );
  
}
