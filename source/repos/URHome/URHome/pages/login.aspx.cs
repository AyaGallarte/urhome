using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace URHome.pages
{
    public partial class login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void LoginBtn_Click(object sender, EventArgs e)
        {
            string email = loginEmail.Text;
            string password = loginPassword.Text;

            // Connection string from Web.config
            string connectionString = ConfigurationManager.ConnectionStrings["devConnectionString"].ConnectionString;

            // SQL query to retrieve the user by email
            string query = "SELECT password, isAdmin FROM users WHERE email = @Email";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    command.Parameters.AddWithValue("@Email", email);

                    connection.Open();
                    SqlDataReader reader = command.ExecuteReader();

                    if (reader.Read())
                    {
                        string storedHashPassword = reader["password"].ToString();
                        bool isAdmin = Convert.ToBoolean(reader["isAdmin"]);

                        // Verify the password
                        if (BCrypt.Net.BCrypt.Verify(password, storedHashPassword))
                        {
                            // Authentication successful, handle the redirection
                            if (isAdmin)
                            {
                                // Redirect to admin page
                                Response.Redirect("homepage.aspx");
                            }
                            else
                            {
                                // Redirect to home page
                                Response.Redirect("homepage.aspx");
                            }
                        }
                        else
                        {
                            // Password is incorrect
                            lblMessage.Text = "Invalid email or password.";
                        }
                    }
                    else
                    {
                        // Email not found
                        lblMessage.Text = "Invalid email or password.";
                    }
                }
            }
        }
        protected void SignUpBtn_Click(object sender, EventArgs e)
        {
            string email = loginEmail.Text;
            string password = loginPassword.Text;

            // Hash the password (optional but recommended)
            string hashedPassword = BCrypt.Net.BCrypt.HashPassword(password);

            // Connection string from Web.config
            string connectionString = ConfigurationManager.ConnectionStrings["devConnectionString"].ConnectionString;

            // SQL query to insert a new user
            string query = "INSERT INTO users (email, password, isAdmin) VALUES (@Email, @Password, 0)";

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(query, connection);
                command.Parameters.AddWithValue("@Email", email);
                command.Parameters.AddWithValue("@Password", hashedPassword);

                connection.Open();
                int rowsAffected = command.ExecuteNonQuery();

                if (rowsAffected > 0)
                {
                    // Registration successful
                    Response.Write("<script>alert('Registration successful!');</script>");
                }
                else
                {
                    // Registration failed
                    Response.Write("<script>alert('Registration failed. Please try again.');</script>");
                }
            }
        }
    }
}