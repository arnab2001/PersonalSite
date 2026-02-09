---
title: "Cure Connect"
shortDescription: "Telemedicine platform connecting patients with doctors through video consultations"
thumbnail: "/images/cureconnect.png"
techStack: ["Node.js", "React", "Bootstrap", "MongoDB", "Twilio", "Stripe", "SAWO Labs", "JWT"]
platform: "Web"
githubUrl: "https://github.com/arnab2001/Cure-Connect-Hack-The-League"
websiteUrl: "https://devpost.com/software/cure-connect"
demoUrl: "https://www.youtube.com/watch?v=VQiyFigl2i8"
achievements: ["Track winner in Hack The League Hackathon - 'Most creative use of Twilio and SAWO APIs'"]
isFeatured: false
displayOrder: 6
---

## Overview

Cure Connect is a comprehensive telemedicine platform that enables patients to consult with doctors remotely through video calls. Winner of "Most creative use of Twilio and SAWO APIs" at Hack The League Hackathon on Devpost.

## Key Features

- **SAWO Authentication**: Secure passwordless authentication for patients and doctors
- **Doctor Discovery**: Browse and select from a list of available doctors
- **Video Consultations**: Real-time video calls for remote medical consultations
- **Payment Integration**: Stripe-powered payment system for consultation fees
- **Queue Management**: Doctors can view and manage their patient queue
- **SMS Notifications**: Twilio integration for sending meeting IDs to patients
- **COVID-19 Information**: Dasha AI integration for accessing current COVID guidelines

## Technical Implementation

Built with a Node.js backend and React frontend, utilizing MongoDB for data storage. SAWO Labs provides passwordless authentication, while Twilio enables video calling and SMS notifications. Stripe handles secure payment processing. Bootstrap ensures a responsive, accessible interface.

## How It Works

1. Patients sign up using SAWO passwordless authentication
2. Browse available doctors and their specializations
3. Pay consultation fee via Stripe
4. Send consultation request to selected doctor
5. Doctor reviews patient queue and opens video room
6. Doctor sends meeting ID to patient via Twilio SMS
7. Patient enters meeting ID to join video consultation
8. Access COVID-19 guidelines through Dasha AI integration

## Gallery

![Cure Connect Dashboard](/images/cureconnect/ss1.jpg)
![Doctor Selection](/images/cureconnect/ss2.jpg)
![Video Consultation](/images/cureconnect/ss3.jpg)
![Platform Overview](/images/cureconnect/original.png)
