using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.models;
using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        public ProductController()
        {
        }

        [HttpGet]
        public async IAsyncEnumerable<Product> Get()
        {
            foreach (var p in getProducts())
            {
                await Task.Delay(1000);
                yield return p;
            }
        }

        private List<Product> getProducts()
        {
            var products = new List<Product>();

            for (int i = 0; i < 10; i++)
            {
                Product p = new Product(i, $"Laptop-{i}", 1000 * i, 2 * i);
                products.Add(p);
            }
            return products;
        }
    }
}