package models

import "gorm.io/gorm"

type Message struct {
	gorm.Model
	Content string `gorm:"size:255;not null" json:"content"`
}
