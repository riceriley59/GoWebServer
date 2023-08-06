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

func QueryUser(c *gin.Context) {
	var loginUser models.User
	var queryUser models.User

	if err := c.BindJSON(&loginUser); err != nil {
		return
	}

	result := database.Database.Where("username = ?", loginUser.Username).First(&queryUser)

	if result.Error != nil {
		c.IndentedJSON(http.StatusUnauthorized, gin.H{"data": "Can't find user. "})
	} else {
		if loginUser.Password == queryUser.Password {
			c.IndentedJSON(http.StatusOK, queryUser)
		} else {
			c.IndentedJSON(http.StatusUnauthorized, gin.H{"data": "Wrong password. "})
		}
	}
}
