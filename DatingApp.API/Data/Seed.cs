using System.Collections.Generic;
using System.Linq;
using DatingApp.API.DatingApp.Data;
using DatingApp.API.Models;
using Newtonsoft.Json;
using DatingApp.API.Data;

namespace DatingApp.API.Data
{
    public static class Seed
    {
        public static void SeedUsers(DataContext context)
        {
            if(!context.Users.Any())
            {
                var userData=System.IO.File.ReadAllText("Data/UserSeedData.json");
                var users= JsonConvert.DeserializeObject<List<User>>(userData);
                foreach (var user in users)
                {
                    byte[] passwordHash, passwordSalt;
                    //CreatePasswordHash("password", out passwordHash, out passwordSalt);
                    CreatePasswordhash("password", out passwordHash, out passwordSalt);
                    user.PasswordHash=passwordHash;
                    user.PasswordSalt=passwordSalt;
                    user.Username=user.Username.ToLower();
                    context.Users.Add(user);
                }
                context.SaveChanges();
            }
        }
        private static void CreatePasswordhash(string password,
            out byte[] passwordHash,
            out byte[] passwordSalt)
        {
            using (var hmac= new System.Security.Cryptography.HMACSHA512())
            {
              passwordSalt=hmac.Key;
              passwordHash=hmac.ComputeHash(System.Text.Encoding.UTF32.GetBytes(password));  
            }
            
        }
    }
}