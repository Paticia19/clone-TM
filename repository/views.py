from rest_framework import generics, permissions
from .models import Manuscript
from .serializers import ManuscriptSerializer

class ManuscriptList(generics.ListCreateAPIView):
    queryset = Manuscript.objects.all()
    serializer_class = ManuscriptSerializer
    permission_classes = [permissions.IsAuthenticated]  # Allow only authenticated users

class ManuscriptDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Manuscript.objects.all()
    serializer_class = ManuscriptSerializer
    permission_classes = [permissions.IsAdminUser]      # Allow only admin users to update or delete