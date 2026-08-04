import {useEffect,useState} from "react";
import api from "../../services/api";
import "../../styles/reschedules.css";

export default function Reschedules(){

const [data,setData]=useState([]);

const [search,setSearch]=useState("");
const [course,setCourse]=useState("");


// DATE FORMAT HELPER
const formatDateTime = (value) => {

  if (!value) return "-";

  const date = new Date(value);

  return date.toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }
  );

};

useEffect(()=>{

loadData();

},[search,course]);



const loadData=()=>{


api.get("/admin/reschedule-history",
{
params:{
search,
course
}
})
.then(res=>{

setData(res.data);

});


}





return (

<div className="reschedule-page">

<h1>
Reschedule History
</h1>



<div className="filter-box">


<input

placeholder="Search student name/email"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>



<select

value={course}

onChange={(e)=>setCourse(e.target.value)}

>

<option value="">
All Courses
</option>


<option>
CCIE Security
</option>


<option>
CCIE Data Center
</option>


<option>
CCIE EI
</option>


<option>
CCIE Wireless
</option>


<option>
Fortinet NSE 8
</option>


</select>


</div>

<table className="reschedule-table">

<thead>

<tr>

<th>Student</th>
<th>Email</th>
<th>Course</th>
<th>Old Slot</th>
<th>New Slot</th>
<th>Rescheduled By</th>
<th>Changed On</th>

</tr>

</thead>


<tbody>


{
data.map((r)=>(

<tr key={r.id}>

<td>{r.fullName}</td>

<td>{r.email}</td>

<td>{r.course}</td>


<td>

Rack: {r.oldRack}

<br/>

Start:
{formatDateTime(r.oldStartTime)}

<br/>

End:
{formatDateTime(r.oldEndTime)}

</td>


<td>

Rack: {r.newRack}

<br/>

Start:
{formatDateTime(r.newStartTime)}

<br/>

End:
{formatDateTime(r.newEndTime)}

</td>

<td>

{r.rescheduledBy}

</td>

<td>

{formatDateTime(r.createdAt)}

</td>

</tr>


))

}


</tbody>


</table>


</div>

)

}