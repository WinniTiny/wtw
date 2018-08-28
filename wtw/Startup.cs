using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(wtw.Startup))]
namespace wtw
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
