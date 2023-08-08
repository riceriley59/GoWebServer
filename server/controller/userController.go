package controller

import (
	"GoWebServer/database"
	"GoWebServer/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func CreateUser(c *gin.Context) {
	var newUser models.User

	if err := c.BindJSON(&newUser); err != nil {
		return
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(newUser.Password), bcrypt.DefaultCost)

	if err != nil {
		c.IndentedJSON(http.StatusNotModified, gin.H{"data": "Error creating User. "})
	} else {
		newUser.Password = string(hash)
	}

	result := database.Database.Create(&newUser)

	if result.Error == nil {
		c.IndentedJSON(http.StatusCreated, newUser)
	} else {
		c.IndentedJSON(http.StatusNotModified, gin.H{"data": "Error Creating User. "})
	}
}

func comparePasswords(hashedPwd string, plainPwd []byte) bool { // Since we'll be getting the hashed password from the DB it
	// will be a string so we'll need to convert it to a byte slice
	byteHash := []byte(hashedPwd)
	err := bcrypt.CompareHashAndPassword(byteHash, plainPwd)

	return err == nil
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
		if comparePasswords(queryUser.Password, []byte(loginUser.Password)) {
			c.IndentedJSON(http.StatusOK, queryUser)
		} else {
			c.IndentedJSON(http.StatusUnauthorized, gin.H{"data": "Wrong password. "})
		}
	}
}
