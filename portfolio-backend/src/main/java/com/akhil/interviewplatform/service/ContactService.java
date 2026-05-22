package com.akhil.interviewplatform.service;

import com.akhil.interviewplatform.entity.Contact;
import com.akhil.interviewplatform.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public Contact saveMessage(Contact contact) {
        return contactRepository.save(contact);
    }
}