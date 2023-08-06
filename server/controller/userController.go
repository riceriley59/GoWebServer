package controller

import (
	"GoWebServer/database"
	"GoWebServer/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var newUser models.User

	if err := c.BindJSON(&newUser); err != nil {
		return
	}

	result := database.Database.Create(&newUser)

	if result.Error == nil {
		c.IndentedJSON(http.StatusCreated, newUser)
	} else {
		c.IndentedJSON(http.StatusNotModified, "Error Creating User")
	}
}
