package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

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
	loadEnv()
	loadDatabase()

	router := gin.Default()

	router.Use(static.Serve("/", static.LocalFile("../client/build", true)))

	api := router.Group("/api")
	{
		api.GET("/", func(c *gin.Context) {
			c.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}

	router.Run(":" + os.Args[1])

	fmt.Println("")
}
