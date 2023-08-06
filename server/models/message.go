package models

import "gorm.io/gorm"

type Message struct {
	gorm.Model
	Text   string `gorm:"size: 255; not null" json:"text"`
	Sender string `gorm:"size: 255; not null" json:"sender"`
}
