using BookApp.Shared;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace BookApp.Apis
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // BookApp ���� ������(���Ӽ�) ���� ���� �ڵ常 ���� ��Ƽ� ���� 
            AddDependencyInjectionContainerForBookApp(services);

            #region CORS
            //[CORS][1] CORS ��� ���
            //[CORS][1][1] �⺻: ��� ���
            services.AddCors(options =>
            {
                //[A] [EnableCors] Ư������ ���� ���� 
                options.AddDefaultPolicy(builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
                //[B] [EnableCors("AllowAnyOrigin")] ���·� ���� ����
                options.AddPolicy("AllowAnyOrigin", builder =>
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            });
            #endregion
        }

        /// <summary>
        /// BookApp ���� ������(���Ӽ�) ���� ���� �ڵ常 ���� ��Ƽ� ���� 
        /// </summary>
        private void AddDependencyInjectionContainerForBookApp(IServiceCollection services)
        {
            // BookAppDbContext.cs Inject: New DbContext Add
            services.AddEntityFrameworkSqlServer().AddDbContext<BookAppDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            // IBookRepository.cs Inject: DI Container�� ����(�������丮) ��� 
            services.AddTransient<IBookRepository, BookRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
