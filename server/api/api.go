package api

import (
	"GoWebServer/controller"

	"github.com/gin-gonic/gin"
)

func Routes(route *gin.Engine) {
	api := route.Group("/api")
	{
		api.POST("/register", controller.CreateUser)
		api.POST("/login", controller.QueryUser)
	}
}
