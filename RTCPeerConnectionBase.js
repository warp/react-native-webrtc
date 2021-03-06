'use strict';

var RTCSessionDescription = require('./RTCSessionDescription');

class RTCPeerConnectionBase {
  localDescription: RTCSessionDescription;
  remoteDescription: RTCSessionDescription;

  onicecandidate: ?Function;
  onnegotiationneeded: ?Function;
  oniceconnectionstatechange: ?Function;
  onsignalingstatechange: ?Function;
  onaddstream: ?Function;

  constructor(configuration) {
    this.constructorImpl(configuration);
  }
  addStream(stream) {
    this.addStreamImpl(stream);
  }
  createOffer(success: ?Function, failure: ?Function, constraints) {
    this.createOfferImpl(success, failure, constraints);
  }
  createAnswer(success: ?Function, failure: ?Function, constraints) {
    this.createAnswerImpl(success, failure, constraints);
  }
  setLocalDescription(sessionDescription: RTCSessionDescription, success: ?Function, failure: ?Function, constraints) {
    this.setLocalDescriptionImpl(sessionDescription, success, failure, constraints);
  }
  setRemoteDescription(sessionDescription: RTCSessionDescription, success: ?Function, failure: ?Function) {
    this.setRemoteDescriptionImpl(sessionDescription, success, failure);
  }
  addIceCandidate(candidate, success, failure) {
    this.addIceCandidateImpl(candidate, success, failure);
  }
  addIceCandidateDirect(candidate, success, failure) {
    this.addIceCandidateDirectImpl(candidate, success, failure);
  }
  close() {
    this.closeImpl();
  }
  constructorImpl() {
    throw new Error('Subclass must define constructorImpl method');
  }
  addStreamImpl() {
    throw new Error('Subclass must define addStreamImpl method');
  }
  createOfferImpl() {
    throw new Error('Subclass must define createOfferImpl method');
  }
  createAnswerImpl() {
    throw new Error('Subclass must define createAnswerImpl method');
  }
  setLocalDescriptionImpl() {
    throw new Error('Subclass must define setLocalDescriptionImpl method');
  }
  setRemoteDescriptionImpl() {
    throw new Error('Subclass must define setRemoteDescriptionImpl method');
  }
  addIceCandidateImpl() {
    throw new Error('Subclass must define addIceCandidateImpl method');
  }
  addIceCandidateDirectImpl() {
    throw new Error('Subclass must define addIceCandidateDirectImpl method');
  }
  closeImpl() {
    throw new Error('Subclass must define closeImpl method');
  }
}

module.exports = RTCPeerConnectionBase;
