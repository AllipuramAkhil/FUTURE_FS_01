package com.akhil.interviewplatform.controller;

import com.akhil.interviewplatform.entity.Contact;
import com.akhil.interviewplatform.service.ContactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5174")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @PostMapping
    public ResponseEntity<String> saveContact(
            @RequestBody Contact contact) {

        contactService.saveMessage(contact);

        return ResponseEntity.ok("Message Saved Successfully");
    }
}