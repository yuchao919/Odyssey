using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using WebAPI.Filter;
using WebAPI.Model;

namespace WebAPI.Controller
{
    public class StudentController : ApiController
    {
        //// GET: api/Student
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET: api/Student/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST: api/Student
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/Student/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE: api/Student/5
        //public void Delete(int id)
        //{
        //}
        [Log]
        public Student Get([FromUri]Student stud)
        {
            return stud;
        }

        public Student Post([FromBody]Student stud)// RequestBody{"id":"1","Name":"aaa"}
        {
            return new Student() { Id = 10086, Name = "SB" };
        }

        //public IHttpActionResult Get(int id)
        //{
        //    Student stud = GetStudentFromDB(id);

        //    if (stud == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(stud);
        //}

        //public IHttpActionResult Fetch()
        //{
        //    return StatusCode(HttpStatusCode.OK);
        //}

        //public IHttpActionResult GetName(int id)
        //{
        //    string name = GetStudentName(id);

        //    if (String.IsNullOrEmpty(name))
        //    {
        //        return NotFound();
        //    }

        //    return new TextResult(name, Request);
        //}
    }


    public class TextResult : IHttpActionResult
    {
        string _value;
        HttpRequestMessage _request;

        public TextResult(string value, HttpRequestMessage request)
        {
            _value = value;
            _request = request;
        }

        public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
        {
            var response = new HttpResponseMessage()
            {
                Content = new StringContent(_value),
                RequestMessage = _request
            };
            return Task.FromResult(response);
        }
    }

}
