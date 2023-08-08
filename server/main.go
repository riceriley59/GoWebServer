package main

import (
	"log"
	"os"

	"GoWebServer/api"
	"GoWebServer/database"
	"GoWebServer/models"

	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func loadDatabase() {
	database.Connect()
	database.Database.AutoMigrate(&models.User{})
}

func loadEnv() {
	err := godotenv.Load(".env.local")

	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main() {
	// load env vars and connect to DB
	loadEnv()
	loadDatabase()

	//intialize router and '/' dir to server static react bundle
	router := gin.Default()
	router.Use(static.Serve("/", static.LocalFile("../client/build", true)))

	//setup api routes
	api.Routes(router)

	//run server on port specified by env var
	router.Run(":" + os.Getenv("PORT"))
}
