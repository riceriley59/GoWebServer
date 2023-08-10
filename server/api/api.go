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

		api.POST("/message/create", controller.CreateMessage)
		api.GET("/message", controller.GetMessages)

		api.GET("/ws", controller.WebSocket)
	}
}
