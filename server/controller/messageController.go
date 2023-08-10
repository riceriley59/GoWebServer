package controller

import (
	"GoWebServer/database"
	"GoWebServer/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetMessages(c *gin.Context) {
	var messages []models.Message

	database.Database.Find(&messages)

	c.IndentedJSON(http.StatusOK, gin.H{"data": messages})
}

func CreateMessage(c *gin.Context) {
	var newMessage models.Message

	if err := c.BindJSON(&newMessage); err != nil {
		return
	}

	result := database.Database.Create(&newMessage)

	if result.Error == nil {
		c.IndentedJSON(http.StatusCreated, newMessage)
	} else {
		c.IndentedJSON(http.StatusNotModified, gin.H{"data": "Error Sending Message. "})
	}
}
