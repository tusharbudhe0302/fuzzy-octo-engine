using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using WebApplication.Controllers;

namespace WebApplication.Controllers
{
        public class Item
        {
            public string Country { get; set; }
            public int Revenues { get; set; }
            public int Expenditures { get; set; }
            public int Surplus { get; set; }
            public string GDP { get; set; }
        }
        public class WorldBank : IWorldBank
     {
        private List<Item> items;

        public WorldBank()
        {
        }

        List<Item> IWorldBank.GetWorldBankReport()
        {
           return  LoadJson();
        }
        public  List<Item> LoadJson()
        {
            List<Item> items;
            string dataFilePath = System.Configuration.ConfigurationManager.AppSettings["dataPath"];
            using (StreamReader r = new StreamReader(dataFilePath))
            {
                string json = r.ReadToEnd();
               items =  JsonConvert.DeserializeObject<List<Item>>(json);
            }
            return items;
        }
    }
}