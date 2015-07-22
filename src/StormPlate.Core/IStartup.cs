
//using Microsoft.AspNet.Builder;

using Microsoft.AspNet.Builder;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;

namespace StormPlate.Core
{
    public interface IStartup
    {
        IConfiguration Configuration { get; set; }
        void ConfigureServices(IServiceCollection services);
        void Configure(IApplicationBuilder app);
       
    }
}
