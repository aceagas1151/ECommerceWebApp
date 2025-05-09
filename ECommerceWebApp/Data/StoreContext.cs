using ECommerceWebApp.Entities;
using Microsoft.EntityFrameworkCore;

namespace ECommerceWebApp.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public required DbSet<Product> Products { get; set; }
    }
}
