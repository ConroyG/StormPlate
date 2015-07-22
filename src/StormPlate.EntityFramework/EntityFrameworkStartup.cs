using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.Data.Entity;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using StormPlate.Core;

namespace StormPlate.EntityFramework
{
    public class EntityFrameworkStartup : IStartup
    {
        public IConfiguration Configuration
        {
            get;
            set;
        }

        public void Configure(IApplicationBuilder app)
        {
            //using (var db = app.ApplicationServices.GetRequiredService<DatabaseContext>())
            //{
            //    var sqlDb = db.Database as SqlServerDatabase;
            //    sqlDb.EnsureCreated();
            //}
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = Configuration.Get("StormPlateDatabaseConnectionString");

            services.AddEntityFramework()
               .AddSqlServer()
               .AddDbContext<StormplateDatabaseContext>(options => options.UseSqlServer(connectionString));
        }
    }
}
