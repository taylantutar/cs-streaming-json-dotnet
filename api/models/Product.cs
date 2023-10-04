using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public record Product(int Id, string Name, decimal Price, int Count);
    
}