﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace BookApp.Shared.Tests
{
    /// <summary>
    /// [7] Test Class: (Arrange -> Act -> Assert) Pattern
    /// 필요한 NuGet 패키지: Install-Package Microsoft.EntityFrameworkCore.InMemory
    /// </summary>
    [TestClass]
    public class BookRepositoryTest
    {
        [TestMethod]
        public async Task BookRepositoryAllMethodTest()
        {
            #region [0] DbContextOptions<T> Object Creation and ILoggerFactory Object Creation
            //[0] DbContextOptions<T> Object Creation and ILoggerFactory Object Creation
            var options = new DbContextOptionsBuilder<BookAppDbContext>()
                .UseInMemoryDatabase(databaseName: $"BookApp{Guid.NewGuid()}").Options;
            //.UseSqlServer("server=(localdb)\\mssqllocaldb;database=BookApp;integrated security=true;").Options;

            var serviceProvider = new ServiceCollection().AddLogging().BuildServiceProvider();
            var factory = serviceProvider.GetService<ILoggerFactory>();
            #endregion

            #region [1] AddAsync() Method Test
            //[1] AddAsync() Method Test
            //[1][1] Repository 클래스를 사용하여 저장
            using (var context = new BookAppDbContext(options))
            {
                context.Database.EnsureCreated(); // 데이터베이스가 만들어져 있는지 확인

                //[A] Arrange: 1번 데이터를 아래 항목으로 저장합니다. 
                var repository = new BookRepository(context, factory);
                var model = new Book { Title = "C# 교과서", Description = "C# 기초를 다룹니다." };

                //[B] Act: AddAsync() 메서드 테스트
                await repository.AddAsync(model); // Id: 1
            }
            //[1][2] DbContext 클래스를 통해서 개수 및 레코드 확인 
            using (var context = new BookAppDbContext(options))
            {
                //[C] Assert: 현재 총 데이터 개수가 1개인 것과, 1번 데이터의 Title이 "C# 교과서"인지 확인합니다. 
                Assert.AreEqual(1, await context.Books.CountAsync());

                var model = await context.Books.Where(n => n.Id == 1).SingleOrDefaultAsync();
                Assert.AreEqual("C# 교과서", model.Title);
            }
            #endregion

            #region [2] GetAllAsync() Method Test
            //[2] GetAllAsync() Method Test
            using (var context = new BookAppDbContext(options))
            {
                // 트랜잭션 관련 코드는 InMemoryDatabase 공급자에서는 지원 X
                // using (var transaction = context.Database.BeginTransaction()) { transaction.Commit(); }

                //[A] Arrange
                var repository = new BookRepository(context, factory);
                var model = new Book { Title = "ASP.NET Core를 다루는 기술", Description = "ASP.NET 기초" };

                //[B] Act
                await repository.AddAsync(model); // Id: 2
                await repository.AddAsync(new Book { Title = "타입스크립트", Description = "TypeScript" }); // Id: 3
            }
            using (var context = new BookAppDbContext(options))
            {
                //[C] Assert
                var repository = new BookRepository(context, factory);
                var models = await repository.GetAllAsync();
                Assert.AreEqual(3, models.Count()); // TotalRecords: 3
            }
            #endregion

            #region [3] GetByIdAsync() Method Test
            //[3] GetByIdAsync() Method Test
            using (var context = new BookAppDbContext(options))
            {
                // Empty
            }
            using (var context = new BookAppDbContext(options))
            {
                var repository = new BookRepository(context, factory);
                var model = await repository.GetByIdAsync(2);
                Assert.IsTrue(model.Title.Contains("ASP.NET"));
                Assert.AreEqual("ASP.NET 기초", model.Description);
            }
            #endregion

            #region [4] UpdateAsync() Method Test
            //[4] UpdateAsync() Method Test
            using (var context = new BookAppDbContext(options))
            {
                // Empty
            }
            using (var context = new BookAppDbContext(options))
            {
                var repository = new BookRepository(context, factory);
                var model = await repository.GetByIdAsync(2);

                model.Title = "ASP.NET & Core를 다루는 기술"; // Modified
                model.Description = "웹 개발 기술의 집합체";
                await repository.UpdateAsync(model);

                var updateModel = await repository.GetByIdAsync(2);

                Assert.IsTrue(updateModel.Title.Contains("&"));
                Assert.AreEqual("ASP.NET & Core를 다루는 기술", updateModel.Title);
                Assert.AreEqual("웹 개발 기술의 집합체",
                    (await context.Books.Where(m => m.Id == 2).SingleOrDefaultAsync())?.Description);
            }
            #endregion

            #region [5] DeleteAsync() Method Test
            //[5] DeleteAsync() Method Test
            using (var context = new BookAppDbContext(options))
            {
                // Empty
            }
            using (var context = new BookAppDbContext(options))
            {
                var repository = new BookRepository(context, factory);
                await repository.DeleteAsync(2);

                Assert.AreEqual(2, (await context.Books.CountAsync()));
                Assert.IsNull(await repository.GetByIdAsync(2));
            }
            #endregion
        }
    }
}
