using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication.Controllers
{
    public class WorldBankController : ApiController
    {
        // GET api/WorldBank
        [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
        public List<Item> Get()
        {
            IWorldBank wb = new WorldBank();
            return wb.GetWorldBankReport();
        }

    }
}
